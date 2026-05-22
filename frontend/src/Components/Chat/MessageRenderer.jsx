// Handles inline formatting: clean raw LLM response text
function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ fontWeight: 600, color: "#ffffff" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "#e2e8f0",
            fontSize: "0.82em",
            padding: "2px 6px",
            borderRadius: "4px",
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            letterSpacing: "0.02em",
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Checks if an entire line is just **bold text**
function isEntirelyBold(line) {
  return /^\*\*[^*]+\*\*[:\s]*$/.test(line.trim());
}

// Renders a single line based on what it looks like
function renderLine(line, i, totalLines) {
  const trimmed = line.trim();

  if (trimmed.startsWith("### ")) {
    return (
      <h3
        key={i}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "15px",
          color: "#ffffff",
          marginTop: "20px",
          marginBottom: "6px",
          letterSpacing: "-0.01em",
        }}
      >
        {renderInline(trimmed.slice(4))}
      </h3>
    );
  }

  if (trimmed.startsWith("## ")) {
    return (
      <h2
        key={i}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          color: "#ffffff",
          marginTop: "24px",
          marginBottom: "8px",
          letterSpacing: "-0.01em",
        }}
      >
        {renderInline(trimmed.slice(3))}
      </h2>
    );
  }

  if (trimmed.startsWith("# ")) {
    return (
      <h1
        key={i}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#ffffff",
          marginTop: "28px",
          marginBottom: "10px",
          letterSpacing: "-0.02em",
        }}
      >
        {renderInline(trimmed.slice(2))}
      </h1>
    );
  }

  if (isEntirelyBold(trimmed)) {
    return (
      <p
        key={i}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "14.5px",
          color: "#ffffff",
          marginTop: "16px",
          marginBottom: "4px",
        }}
      >
        {renderInline(trimmed)}
      </p>
    );
  }

  if (/^[-•]\s/.test(trimmed)) {
    return (
      <li
        key={i}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14.5px",
          color: "#c9cdd4",
          lineHeight: "1.8",
          paddingLeft: "4px",
          listStyleType: "disc",
        }}
      >
        {renderInline(trimmed.replace(/^[-•]\s/, ""))}
      </li>
    );
  }

  if (/^\d+\.\s/.test(trimmed)) {
    return (
      <li
        key={i}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14.5px",
          color: "#c9cdd4",
          lineHeight: "1.8",
          paddingLeft: "4px",
          listStyleType: "decimal",
        }}
      >
        {renderInline(trimmed.replace(/^\d+\.\s/, ""))}
      </li>
    );
  }

  return (
    <span
      key={i}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "14.5px",
        color: "#c9cdd4",
        lineHeight: "1.85",
      }}
    >
      {renderInline(trimmed)}
      {i < totalLines - 1 && <br />}
    </span>
  );
}

const baseTextStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "14.5px",
  color: "#c9cdd4",
  lineHeight: "1.85",
};

function MessageRenderer({ content }) {
  if (!content) return null;

  const blocks = content.split(/\n\n+/);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n").filter((l) => l.trim() !== "");

        if (lines.length === 0) return null;

        // Pure numbered list
        const isAllNumbered = lines.every((l) => /^\d+\.\s/.test(l.trim()));
        if (isAllNumbered) {
          return (
            <ul
              key={blockIndex}
              style={{
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                listStyleType: "decimal",
              }}
            >
              {lines.map((line, i) => (
                <li key={i} style={{ ...baseTextStyle, paddingLeft: "4px" }}>
                  {renderInline(line.replace(/^\d+\.\s/, "").trim())}
                </li>
              ))}
            </ul>
          );
        }

        // Pure bullet list
        const isAllBullet = lines.every((l) => /^[-•]\s/.test(l.trim()));
        if (isAllBullet) {
          return (
            <ul
              key={blockIndex}
              style={{
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                listStyleType: "disc",
              }}
            >
              {lines.map((line, i) => (
                <li key={i} style={{ ...baseTextStyle, paddingLeft: "4px" }}>
                  {renderInline(line.replace(/^[-•]\s/, "").trim())}
                </li>
              ))}
            </ul>
          );
        }

        // Mixed block
        const hasMixedContent =
          lines.some((l) => /^[-•]\s/.test(l.trim())) ||
          lines.some((l) => /^\d+\.\s/.test(l.trim())) ||
          lines.some((l) => /^#{1,3}\s/.test(l.trim())) ||
          lines.some((l) => isEntirelyBold(l.trim()));

        if (hasMixedContent) {
          return (
            <div key={blockIndex} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {lines.map((line, i) => renderLine(line, i, lines.length))}
            </div>
          );
        }

        // Plain paragraph — split on sentence boundaries
        const sentences = lines
          .join(" ")
          .split(/(?<=[.?!])\s+/)
          .filter(Boolean);

        return (
          <div key={blockIndex} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {sentences.map((sentence, i) => (
              <p key={i} style={baseTextStyle}>
                {renderInline(sentence.trim())}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default MessageRenderer;