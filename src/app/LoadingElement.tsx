const LoadingElement = async () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Loaded"));
    }, 3000);
  });

  const Elo = await myPromise;

  return (
    <div className="grid gap-y-[0.8rem] gap-x-[1rem] grid-cols-[auto_auto] w-[min-content]">
      <p>{"Loaded :)"}</p>
      <p>Elo1</p>
      <p>Elo2</p>
      <p>Elo3</p>
    </div>
  );
};

export default LoadingElement;
