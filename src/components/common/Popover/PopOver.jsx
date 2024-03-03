

export function PopOver({ text, isHover }) {
  return (
    <div className="transition-all duration-500">
      {isHover && <p>{text}</p>}
    </div>
  );
}
