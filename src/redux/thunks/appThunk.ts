import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { addNewPost } from "../slices/appSlice";

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
            current: page,
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

export const crateNewChirpApi = createAsyncThunk(
  'auth/crateNewChirp',
  async (data: CrateNewChirpApiBody, { fulfillWithValue, rejectWithValue, dispatch }) => {
    const { post, tags } = data
    const url = `/api/v1/chirpz/crate`;

    try {
      // api post call here..
      dispatch(addNewPost({
        user: {
          name: "Harpreet Singh",
          verified: true
        },
        post: { message: post },
        tags: tags
      }))
      return fulfillWithValue({})
    } catch (error) {
      dispatch(getChirpzHomeScreenListApi({})) // reset list incase of error
      return rejectWithValue(error);
    } finally {
      // do something...
    }
  },
);