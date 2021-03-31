import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './pages/Home';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import NotFound from './pages/NotFound';

Enzyme.configure({ adapter: new Adapter() });

describe('When App renders', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />);
  });
  it('displays Header and Footer', () => {
    // arrange
    // in beforeEach

    // act
    const renderedHeader = renderedApp.find('Header');
    const renderedFooter = renderedApp.find('Footer');

    // assert
    expect(renderedHeader.length).toEqual(1);
    expect(renderedFooter.length).toEqual(1);
  });
  it('provides a route with path "/" to Home page', () => {
    // arrange
    // in beforeEach

    // act
    const renderedHomeRoute = renderedApp.find('[path="/"]');
    // assert
    expect(renderedHomeRoute.length).toEqual(1);
    expect(renderedHomeRoute.props().component).toEqual(Home);
  });
  it('provides a route with path "/catEdit/:id" to CatEdit page', () => {
    // arrange
    // in beforeEach

    // act
    const renderedCatEditRoute = renderedApp.find('[path="/catEdit/:id"]');

    // assert
    expect(renderedCatEditRoute.length).toEqual(1);
    expect(renderedCatEditRoute.props().component).toEqual(CatEdit);
  });
  it('provides a route with path "/catIndex" to CatIndex page', () => {
    // arrange
    // in beforeEach

    // act
    const renderedCatIndexRoute = renderedApp.find('[path="/catIndex"]');

    // assert
    expect(renderedCatIndexRoute.length).toEqual(1);
    expect(renderedCatIndexRoute.props().component).toEqual(CatIndex);
  });
  it('provides a route with path "/catShow/:id" to CatShow page', () => {
    // arrange
    // in beforeEach

    // act
    const renderedCatShowRoute = renderedApp.find('[path="/catShow/:id"]');

    // assert
    expect(renderedCatShowRoute.length).toEqual(1);
    expect(renderedCatShowRoute.props().component).toEqual(CatShow);
  });
  it('provides a route with path "/catNew" to CatNew page', () => {
    // arrange
    // in beforeEach

    // act
    const renderedCatNewRoute = renderedApp.find('[path="/catNew"]');

    // assert
    expect(renderedCatNewRoute.length).toEqual(1);
    expect(renderedCatNewRoute.props().component).toEqual(CatNew);
  });
  // *****Find out how to test this area*******
  it('provides a route with path "/" to NotFound page', () => {
    // arrange
    // in beforeEach

    // act
    const renderedNotFoundRoute = renderedApp.find('[]');

    // assert
    expect(renderedNotFoundRoute.length).toEqual(1);
    expect(renderedNotFoundRoute.props().component).toEqual(NotFound);
  });
});
