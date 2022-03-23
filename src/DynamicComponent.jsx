export const DynamicComponent = () => {
  return (
    <div>
      <button
        className={"border"}
        onClick={() => {
          throw new Error("sourcemap DynamicComponent error");
        }}
      >
        throw error
      </button>
    </div>
  );
};
