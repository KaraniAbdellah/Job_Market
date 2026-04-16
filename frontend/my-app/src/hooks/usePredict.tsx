const URL = import.meta.env.VITE_URL;

export function usePredict() {
  const sendRequest = async (data: unknown) => {
    try {
      const response = await fetch(`${URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return { sendRequest };
}
