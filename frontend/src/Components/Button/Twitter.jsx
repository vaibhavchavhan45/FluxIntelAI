function Twitter({ fill = "#ffffff", href,  width, height }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill}>
        <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.88l-5.39-7.04L3.9 22H1l7.03-8.03L1.5 2h6.98l4.87 6.5L18.244 2z" />
      </svg>
    </a>
  );
}

export default Twitter;