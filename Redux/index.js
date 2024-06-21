
const redux = require('redux');
const createStore = redux.createStore;

//Action
const WIDHTDRAW_MONEY = "WIDHTDRAW_MONEY";
const Deposit_MONEY = "Deposit_MONEY";

function widhtdrawmoney(){
        return{
            type:WIDHTDRAW_MONEY
        }
        
}
function depositmoney(){
        return{
            type:Deposit_MONEY
        }
        
}

//Reducer (state,action)=>

    const initialState = {
        totalMoney:10000
    }

    const reducer = (state=initialState,action)=>{

        switch(action.type){
            case "WIDHTDRAW_MONEY":return{
                ...state,
                totalMoney:state.totalMoney-1000
            }
            case "Deposit_MONEY":return{
                ...state,
                totalMoney:state.totalMoney+1000
            }
           default:return state;
        }
    }

const store = createStore(reducer);
console.log("initial State",store.getState());
store.subscribe(()=>console.log("Updated state is:",store.getState()));
store.dispatch(widhtdrawmoney());
store.subscribe(()=>console.log("Deposit state is:",store.getState()));
store.dispatch(depositmoney());

