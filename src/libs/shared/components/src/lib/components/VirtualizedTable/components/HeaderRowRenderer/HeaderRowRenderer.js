const HeaderRowRenderer = ({ className, columns, style }) => {
  return (
    <div className={className} role="row" style={style}>
      {columns}
    </div>
  );
};

export default HeaderRowRenderer;
