import React from 'react';
import CardInfo from './CardInfo';

export default {
  title: 'Common/CardInfo',
  component: CardInfo,
};

const Template = (args) => <CardInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Black Coffee Mug',
  description: 'This is a sample product description for the black coffee mug. It is stylish and perfect for your daily coffee needs.',
  price: '$19.99',
  img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvSZ_Fh5C3EgX0lJfo9EUu3-Js-oWusMJoXPaE3DaJPsNaVmQ2tZHB0CeVCAe2j0M6H7rM7QmbJWt8H1kFf7czHAu6Gp-BLIKN_fJc15S_Szl2DMKnBMuT3CEu',
};
