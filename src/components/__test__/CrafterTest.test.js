import {
  render, screen, waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import * as actions from '../../Redux/StylesReducer/stylesReducer';
import store from '../../Redux/configStore';
import BeerStylesPage from '../BeerStyles/BeerStylesPage';

describe('Testing the reducers', () => {
  test('Unknown action.type returns the current state', () => {
    const initial = [
      {
        name: 'Lite American Lager',
        id: 'b5fca833-cc25-4c9c-8ce6-dd93fb3c6a98',
        abv_min: 2.8,
        abv_max: 4.2,
        ibu_min: 8,
        ibu_max: 12,
        description:
          'Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.',
        show: false,
      },
    ];
    const unknownAction = () => ({ type: 'unknown', payload: 'something' });
    expect(actions.default(initial, unknownAction)).toEqual(initial);
  });
  test('Change status active false to true and viceversa', () => {
    const initial = [
      {
        name: 'Lite American Lager',
        id: 1,
        abv_min: 2.8,
        abv_max: 4.2,
        ibu_min: 8,
        ibu_max: 12,
        description:
          'Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.',
        show: false,
      },
      {
        name: 'Lite American Lager',
        id: 2,
        abv_min: 2.8,
        abv_max: 4.2,
        ibu_min: 8,
        ibu_max: 12,
        description:
          'Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.',
        show: false,
      },
      {
        name: 3,
        id: 'b5fca833-cc25-4c9c-8ce6-dd93fb3c6a98',
        abv_min: 2.8,
        abv_max: 4.2,
        ibu_min: 8,
        ibu_max: 12,
        description:
          'Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.',
        show: false,
      },
    ];
    const final = [
      {
        name: 'Lite American Lager',
        id: 1,
        abv_min: 2.8,
        abv_max: 4.2,
        ibu_min: 8,
        ibu_max: 12,
        description:
          'Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.',
        show: false,
      },
      {
        name: 'Lite American Lager',
        id: 2,
        abv_min: 2.8,
        abv_max: 4.2,
        ibu_min: 8,
        ibu_max: 12,
        description:
          'Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.',
        show: true,
      },
      {
        name: 3,
        id: 'b5fca833-cc25-4c9c-8ce6-dd93fb3c6a98',
        abv_min: 2.8,
        abv_max: 4.2,
        ibu_min: 8,
        ibu_max: 12,
        description:
          'Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.',
        show: false,
      },
    ];
    expect(actions.default(initial, actions.showInfo(2))).toEqual(final);
  });
});

describe('Body of Styles', () => {
  test('Check Lite American Lager appears in DOM', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <BeerStylesPage />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const text = screen.findByText(
        /Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching./,
      );
      expect(text).not.toBe(null);
    });
  });
  test('Matches snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <BeerStylesPage />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
