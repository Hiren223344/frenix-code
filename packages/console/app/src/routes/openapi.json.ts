export async function GET() {
  const response = await fetch(
    "https://raw.githubusercontent.com/Hiren223344/frenix-code/refs/heads/dev/packages/sdk/openapi.json",
  )
  const json = await response.json()
  return json
}
