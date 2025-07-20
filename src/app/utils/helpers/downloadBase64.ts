/**
 * Downloads a PDF file from a base64 string.
 * @param base64String - The base64 string representing the PDF file.
 * @param fileName - The name of the file to be downloaded (default: "document.pdf").
 */
export function downloadBase64(base64String: string | undefined, fileName: string = "document.pdf"): void {
    try {
        if (!base64String || typeof base64String !== "string") {
            throw new Error("Invalid base64 string provided.");
        }

        if (!base64String.startsWith("data:application/pdf;base64,")) {
            base64String = `data:application/pdf;base64,${base64String}`;
        }

        const cleanBase64String = base64String.replace(/^data:application\/pdf;base64,/, "");

        const paddedBase64String = cleanBase64String.padEnd(cleanBase64String.length + (4 - (cleanBase64String.length % 4)) % 4, "=");

        const byteCharacters = atob(paddedBase64String);
        const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "application/pdf" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error("Failed to download the file:", error);
    }
}