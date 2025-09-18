export async function csvToJson<T>(
  file: File,
  headers: string[],
  delimiter: string
) {
  const text = await file.text();
  const lines = text.trim().split("\n");

  const json = lines.slice(1).map((line) => {
    const values = line.split(delimiter).map((v) => v.trim());
    const obj: Record<string, string> = {};

    headers.forEach((header, i) => {
      obj[header.trim()] = values[i];
    });
    return obj as T;
  });

  console.log({ json });

  return json;
}
