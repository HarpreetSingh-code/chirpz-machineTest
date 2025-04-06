import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const getChirpzHomeScreenListApi = createAsyncThunk(
    'auth/getChirpzHomeScreenList',
    async (data: getChirpzHomeScreenListApiBody, { fulfillWithValue, rejectWithValue }) => {
        const { page = 1 } = data
        const url = `/api/v1/chirpz/home?page=:page`.replace(":page", page.toString());

        try {
            const response = {
                data: {
                    list: [
                        {
                          user: {
                            name: "Malice martha",
                            verified: true
                          },
                          post: {
                            message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa. Aperiam, et, in eum, fuga aut voluptas doloribus natus consequatur consectetur rerum quas officia repellat. Quo, quae. Quas, quibusdam.",
                          },
                          tags: ["reading", "hobby", "books", "reading", "hobby", "books", "reading", "hobby", "books"]
                        },
                        {
                          user: {
                            name: "Malice martha",
                            verified: true
                          },
                          post: {
                            message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa. Aperiam, et, in eum, fuga aut voluptas doloribus natus consequatur consectetur rerum quas officia repellat. Quo, quae. Quas, quibusdam.",
                          },
                          tags: ["reading", "hobby", "books"]
                        },
                        {
                          user: {
                            name: "Malice martha",
                            verified: true
                          },
                          post: {
                            message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa. Aperiam, et, in eum, fuga aut voluptas doloribus natus consequatur consectetur rerum quas officia repellat. Quo, quae. Quas, quibusdam.",
                          },
                          tags: ["reading", "hobby", "books"]
                        },
                        {
                          user: {
                            name: "Malice martha",
                            verified: false
                          },
                          post: {
                            message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa. Aperiam, et, in eum, fuga aut voluptas doloribus natus consequatur consectetur rerum quas officia repellat. Quo, quae. Quas, quibusdam.",
                          },
                          tags: ["reading", "hobby", "books", "reading", "hobby", "books", "reading", "hobby", "books", "reading", "hobby", "books"]
                        },
                      ],
                    pagination: {
                        current : page,
                        total: 4
                    }
                }
            }
            return fulfillWithValue(response.data)
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            // do something...
        }
    },
);