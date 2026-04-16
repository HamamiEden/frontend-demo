// import * as ipRangeCheck from "ip-range-check";
import * as ipaddr from "ipaddr.js";
import { documentationIpRanges, hostIpRanges, privateIpRanges, reservedIpRanges, subnetIpRanges } from "./reservedIpRanges";

const { isIP, isInt, isPort, isFQDN } = require("validator");

const validateIP = ipAddress => {
  if (ipAddress) {
    return isIP(ipAddress);
  } else return false;
};

const validateFQDN = domain => {
  if (!domain) return false;
  return isFQDN(domain);
};

const validateCIDR = cidr => {
  if (!cidr || typeof cidr !== "string") return false;

  const values = cidr.trim().split("/");
  if (values.length !== 2) return false;

  const [ip, mask] = values;

  const numericCharsRegex = /^\d+$/;

  if (!numericCharsRegex.test(mask)) return false;

  if (!validateIP(ip)) return false;

  try {
    const parsedIp = ipaddr.parse(ip);
    const parsedMask = parseInt(mask, 10);

    if (parsedIp.kind() === "ipv6") {
      return parsedMask >= 0 && parsedMask <= 128;
    } else if (parsedIp.kind() === "ipv4") {
      return parsedMask >= 0 && parsedMask <= 32;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

const validateIPMask = address => {
  if (!address || typeof address !== "string") return false;

  if (!address.includes("/")) return false;

  const values = address.trim().split("/");
  const [ip = "", mask = ""] = values;

  const ipValue = ip.trim();
  const maskValue = mask.trim();

  return values.length === 2 && isIP(ipValue) && isInt(maskValue, { min: 1, max: 128, allow_leading_zeroes: false });
};

const validatePort = (port, options = {}) => {
  if (!port || !options) return false;
  if (typeof options !== "object") options = {};
  const { strictMode = false, errorMessage = false } = options;
  const minPort = strictMode ? 1 : 0;
  if (isPort(port)) {
    if (Number(port) < minPort) return errorMessage ? "Port 0 is not allowed." : false;
    return true;
  } else if (port.includes("-")) {
    const values = port.split("-");
    return values.length === 2 &&
      isPort(values[0]) &&
      isPort(values[1]) &&
      Number(values[0]) >= minPort &&
      Number(values[1]) >= minPort &&
      Number(values[0]) < Number(values[1])
      ? true
      : errorMessage
        ? "Invalid Port"
        : false;
  }
  return errorMessage ? "Invalid Port" : false;
};

const validatePortsGroup = (ports = [], options) => {
  if (typeof options !== "object" && options !== null) {
    options = {};
  }
  const { strictMode, allowedPorts } = options;
  const portSet = new Set();

  for (const port of ports) {
    if (typeof port === "string" && allowedPorts?.length && allowedPorts.includes(port)) {
      continue;
    }
    const portValidation = validatePort(port, { strictMode, errorMessage: true });
    if (portValidation !== true) {
      return typeof portValidation === "string" ? portValidation : "Invalid Port";
    }
    let startPort, endPort;
    const [start, end] = port.split("-");
    startPort = parseInt(start, 10);
    endPort = end ? parseInt(end, 10) : startPort;

    for (let i = startPort; i <= endPort; i++) {
      if (portSet.has(i)) {
        return "You have entered identical values.";
      }
      portSet.add(i);
    }
  }
  return true;
};

const isIpInRange = (ip, range) => {
  let ipIsInRange = false;
  for (const item of range) {
    if (isIpInCidr(ip, item)) {
      ipIsInRange = true;
      break;
    }
  }
  return ipIsInRange;
};

const isIpInCidr = (ip, cidr) => {
  try {
    const parsedIp = ipaddr.process(ip);
    // check IP
    if (cidr.indexOf("/") === -1) {
      const parsedCidr = ipaddr.process(cidr);
      if (parsedIp.kind() === "ipv6" && parsedCidr.kind() === "ipv6") {
        return parsedIp.toNormalizedString() === parsedCidr.toNormalizedString();
      }
      return parsedIp.toString() === parsedCidr.toString();
      // check CIDR
    } else {
      const parsedRange = ipaddr.parseCIDR(cidr);
      return parsedIp.match(parsedRange);
    }
  } catch (e) {
    return false;
  }
};

const isIPDocumentation = value => isIpInRange(value, documentationIpRanges);
const isIPPrivate = value => isIpInRange(value, privateIpRanges);
const isIPReserved = value => isIpInRange(value, reservedIpRanges);
const isIPHost = value => isIpInRange(value, hostIpRanges);
const isIPSubnet = value => isIpInRange(value, subnetIpRanges);

export default {
  validateIP,
  validateFQDN,
  validateCIDR,
  validateIPMask,
  validatePort,
  validatePortsGroup,
  isIPDocumentation,
  isIPPrivate,
  isIPReserved,
  isIPHost,
  isIPSubnet
};
