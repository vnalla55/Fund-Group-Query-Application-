import { createSlice } from '@reduxjs/toolkit'

const fundListSlice = createSlice({
    name: "fundList",
    initialState: {
        fundGroupList: [],
        fundCategoryList: [],
        fundClassList: [],
        fundLinksList: [],
        selectedFund: []
    },

    reducers: {

        updateSelectedFund: (state, action) => {
            state.selectedFund = action.payload
        },
        // updateSelectedFundCategory: (state, action) => {
        //     state.selectedFundCategory = action.payload
        // },
        // updateSelectedFundClass: (state, action) => {
        //     state.selectedFundClass = action.payload
        // },

        updateFundGroupList: (state, action) => {
            state.groupList = action.payload
        },
        updateFundCategoryList: (state, action) => {
            state.categoryList = action.payload
        },
        updateFundClassList: (state, action) => {
            state.classList = action.payload
        },
        updateFundLinksList: (state, action) => {
            state.linksList = action.payload
        },
    }
})

export default fundListSlice;