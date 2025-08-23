export function handleDBOperation(err: Error | null) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Operation successful");
}
