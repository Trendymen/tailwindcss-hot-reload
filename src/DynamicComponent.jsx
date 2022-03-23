export const DynamicComponent = () => {
  return (
    <div>
      <button
        className={"border"}
        onClick={() => {
          throw new Error("DynamicComponent error");
        }}
      >
        throw error
      </button>
    </div>
  );
};
