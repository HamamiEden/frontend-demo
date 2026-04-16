const documentationIpRanges = [
  "192.0.2.0/24",
  "198.51.100.0/24",
  "203.0.113.0/24",
  "233.252.0.0/24"
  // IPv6
  // "2001:db8::/32",
];

const privateIpRanges = [
  "192.168.0.0/16",
  "10.0.0.0/8",
  "100.64.0.0/10",
  "172.16.0.0/12",
  "192.0.0.0/24",
  "198.18.0.0/15"
  // IPv6
  // "64:ff9b:1::/48",
  // "fc00::/7",
];

const reservedIpRanges = [
  "192.88.99.0/24",
  "224.0.0.0/4",
  "240.0.0.0/4",
  "0.0.0.0/8"
  // IPv6
  // ["fe80::", "fe80::ffff:ffff:ffff:ffff"],
  // "100::/64",
  // "::ffff:0:0/96",
  // "::ffff:0:0:0/96",
  // "2001:20::/28",
  // "::/128",
];

// IPv6
// const globalIpRanges = [
//   "64:ff9b::/96",
//   "2001:0000::/32",
//   "2002::/16",
//   "ff00::/8",
// ];

const hostIpRanges = [
  "127.0.0.0/8"
  // IPv6
  // "::1/128"
];
const subnetIpRanges = ["169.254.0.0/16", "255.255.255.255/32"];

export { documentationIpRanges, privateIpRanges, reservedIpRanges, hostIpRanges, subnetIpRanges };
