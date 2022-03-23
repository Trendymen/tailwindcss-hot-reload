export const DynamicComponent = () => {
  return (
    <div>
      <button
        onClick={() => {
          throw new Error("DynamicComponent error");
        }}
      >
        throw error
      </button>
    </div>
  );
};
