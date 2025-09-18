interface CsvToJsonOptions {
  headers?: string[];
  delimiter?: string;
  skipFirstRow?: boolean;
}

export async function csvToJson<T>(
  file: File,
  { headers, delimiter = ",", skipFirstRow = true }: CsvToJsonOptions = {}
) {
  const text = await file.text();
  const lines = text.trim().split("\n");
  const jsonKeys = headers || lines[0].split(delimiter).map((h) => h.trim());

  const json = lines.slice(skipFirstRow ? 1 : 0).map((line) => {
    const values = line.split(delimiter).map((v) => v.trim());
    const obj: Record<string, string> = {};

    jsonKeys.forEach((header, i) => {
      obj[header.trim()] = values[i];
    });
    return obj as T;
  });

  console.log({ json });

  return json;
}
