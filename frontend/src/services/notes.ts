import axios from "axios";

const url = "https://localhost:5000/Notes";

export const fetchNotes = async (filter) => {
  try {
    var response = await axios.get(url, {
      params: {
        search: filter?.search,
        sortItem: filter?.sortItem,
        sortOrder: filter?.sortOrder,
      },
    });
    return response.data.notes;
  } catch (e) {
    console.error(e);
  }
};

export const createNote = async (note) => {
  try {
    var response = await axios.post(url, note);
    return response.status;
  } catch (e) {
    console.error(e);
  }
};
