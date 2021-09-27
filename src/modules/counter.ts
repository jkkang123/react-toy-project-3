const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const SET_COUNT = 'counter/SET_COUNT' as const;

export const increase = (idx: number) => ({
  type: INCREASE,
  payload: idx
});

export const decrease = (idx: number) => ({
  type: DECREASE,
  payload: idx
});

export const setMovieCnt = (arr: number[]) => ({
  type: SET_COUNT,
  payload: arr
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof setMovieCnt>;

type CounterState = { count: number[] };

const initialState: CounterState = {
  count: [0, 0]
};

function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE: 
      return { 
        count: state.count.map((cnt, idx) => {
          if (idx === action.payload) {
            return cnt += 1;
          }else {
            return cnt
          }
        }) 
      };
    case DECREASE:
      return { 
        count: state.count.map((cnt, idx) => {
          if (idx === action.payload) {
            return cnt -= 1;
          }else {
            return cnt
          }
        }) 
      };
    case SET_COUNT:
      return { count: action.payload };
    default:
      return state;
  }
}

export default counter;