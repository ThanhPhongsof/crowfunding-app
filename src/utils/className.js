export default function classNames(...args) {
  return args
    .reduce((acc, value) => {
      if (typeof value === "string") {
        return acc.concat(value.split(" "));
      }
      return acc.concat(Object.values(value));
    }, [])
    .join(" ");
}
