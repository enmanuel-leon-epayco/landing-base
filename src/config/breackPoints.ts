const size = {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    xxl: "1400px",
  };
  const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
  };
  export default { size, device };