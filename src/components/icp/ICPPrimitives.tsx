import React from "react";

interface SectionBarProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionBar: React.FC<SectionBarProps> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="h-[3px] bg-icp-rule" />
    <div className="section-bar bg-icp-bar text-icp-bar-fg text-[12px] font-bold uppercase tracking-wider py-2 px-4">
      {children}
    </div>
  </div>
);

export const GridCell: React.FC<{
  children: React.ReactNode;
  className?: string;
  header?: boolean;
}> = ({ children, className = "", header }) => (
  <div
    className={`border border-icp-grid/30 px-3 py-2 text-[11px] leading-relaxed ${
      header ? "font-bold bg-muted/50" : "bg-icp-cell"
    } ${className}`}
  >
    {children}
  </div>
);

export const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-icp-label">{children}</span>
);

export const Value: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-icp-value">{children}</span>
);

export const VerticalLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`flex items-center justify-center bg-muted/60 border border-icp-grid/30 px-1 py-2 font-bold text-[11px] uppercase tracking-wide writing-mode-vertical ${className}`}
    style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
  >
    {children}
  </div>
);
