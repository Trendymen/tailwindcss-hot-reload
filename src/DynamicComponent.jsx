export const DynamicComponent = () => {
    const a = {}
  return (
    <div>
      <button
        className={"border"}
        onClick={() => {
          a.b();
        }}
      >
        throw error
      </button>
    </div>
  );
};
