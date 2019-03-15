/* eslint no-console: 0 */

async function hi(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("hi");
    }, Math.random() * 1000);
  });
}

async function bye(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("bye");
    }, Math.random() * 1000);
  });
}

(async () => {
  for (let i = 0; i < 50; i++) {
    console.info(await Promise.all([hi(), bye()]));
    // console.info(await Promise.race([hi(), bye()]));
  }
})();

console.info("hello");
