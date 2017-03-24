function createJestTest(filename) {
  const fileWithOutExt = filename.replace(/\.[^/.]+$/, '');
  const readableFilename = capitalizeFirstLetter(fileWithOutExt);
  return `import React from 'react';
import { shallow } from 'enzyme';
import ${readableFilename} from '../${readableFilename}';

describe('${readableFilename}', () => {
  it('Should render ${readableFilename} correctly', () => {
    const component = shallow(<${readableFilename} />);
    expect(component).toMatchSnapshot();
  });
});

`;
}

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

module.exports = { createJestTest };
