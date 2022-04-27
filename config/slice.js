import { createSlice,configureStore,createSelector } from '@reduxjs/toolkit'
import {loadDB} from './firebase'
import { createWrapper,HYDRATE } from 'next-redux-wrapper'

const initialState = {
    products:[],
    dynamicUrl:''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    allProducts: (s, { payload }) => {
        s.products = payload
    },
    urlParam: (s, { payload }) => {
        s.dynamicUrl = payload
    },
    extraReducers: {
		// Called on client, payload contains entire server state
		[HYDRATE]: (s, { payload }) => {
			if (!payload) return
			for (const [key, value] of Object.entries(payload)) {
				if (COMMON_PROPS.includes(key)) s[key] = value
			}
		},
	},

  }
})
export const { allProducts,dynamicUrl } = counterSlice.actions


export const getAllProducts = () => async dispatch => {
    loadDB().firestore().collection('hair').onSnapshot((querySnapshot) => {
        const contacts = [];
        querySnapshot.forEach((doc) => {
            contacts.push({...doc.data(),id:doc.id})
        })
        dispatch(allHouses(contacts))
    })
}

export const wholeProducts = s => s.products




const {reducer} = counterSlice

const makeStore = () =>
    configureStore({
        reducer,
    })

// Action creators are generated for each case reducer function

export const wrapper = createWrapper(makeStore)