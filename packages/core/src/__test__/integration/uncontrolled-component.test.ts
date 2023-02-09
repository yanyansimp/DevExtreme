import { createSelector, createStore } from '../../index';

const PROP1_DEFAULT = 'prop1-default';
const PROP1_PARAM = 'param1';

type Props = {
  prop1: string;
};

function createUncontrolledComponent({
  onProp1Change,
  prop1Default = PROP1_DEFAULT,
}: {
  onProp1Change?(v: string): void,
  prop1Default?: string,
} = {}) {
  const store = createStore<Props>({
    prop1: prop1Default,
  }, {
    prop1: {
      controlledMode: false,
      changeCallback(value: string): void {
        onProp1Change?.(value);
      },
    },
  });

  const selector1 = createSelector(
    (state: Props) => ({ ...state, param1: PROP1_PARAM }),
    ({ prop1, param1 }) => `selected1-${param1}-${prop1}`,
  );

  let selected1 = selector1(store.getState());

  store.subscribe((state) => { selected1 = selector1(state); });

  return {
    selected1,
    getState: store.getState,
    updateState(state: Props) {
      store.addUpdate(() => ({ ...state }));
      store.commitUpdates();
    },
  };
}

describe('uncontrolled component', () => {
  it('provides selected value', () => {
    const uncontrolledComponent = createUncontrolledComponent({
      prop1Default: 'abc',
    });

    expect(uncontrolledComponent.selected1).toBe('selected1-param1-abc');
  });

  it('updates state', () => {
    const onProp1Change = jest.fn();
    const {
      getState,
      updateState,
    } = createUncontrolledComponent({
      prop1Default: 'abc',
      onProp1Change,
    });

    updateState({ prop1: 'def' });

    expect(getState().prop1).toBe('def');
    expect(onProp1Change).toBeCalledTimes(1);
    expect(onProp1Change).toBeCalledWith('def');
  });
});
