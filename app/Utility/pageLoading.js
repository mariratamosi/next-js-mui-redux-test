import Loading from "./loading"

// width: 100%;
// background: #a09d9d;
// height: 100%;
// position: absolute;
// z-index: 1200;
// top: 0;
// opacity: 0.5;

export default function PageLoading() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fff",
          position: "absolute",
          zIndex: 1200,
          top: 0,
          opacity: 0.5,
        }}
      ></div>
      <Loading />
    </>
  )
}
