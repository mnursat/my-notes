import axios from "axios";

const url = "https://localhost:5000/Notes";

export const fetchNotes = async (filter) => {
  try {
    var response = await axios.get(url, {
      params: {
        search: filter?.search,
        sortItem: filter?.sortItem,
        sordOrder: filter?.sortOrder,
      },
    });
    return response.data.notes;
  } catch (e) {
    console.error(e);
  }
};
