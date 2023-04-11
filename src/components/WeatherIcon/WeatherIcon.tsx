import { IWeatherIconProps } from './types';
import {
  BsClouds,
  BsCloudDrizzleFill,
  BsCloudRainFill,
  BsSnow2,
  BsFillCloudHaze2Fill,
} from 'react-icons/bs';
import { MdThunderstorm } from 'react-icons/md';
import { WiSmoke, WiNightClear } from 'react-icons/wi';
import { GiSandstorm, GiTornado } from 'react-icons/gi';

const WeatherIcon = ({ id }: IWeatherIconProps) => {
  const icons = [
    // Thunderstorm
    { range: [200, 202], icon: MdThunderstorm },
    { range: [210, 212], icon: MdThunderstorm },
    { range: [221], icon: MdThunderstorm },
    { range: [230, 232], icon: MdThunderstorm },
    // Drizzle
    { range: [300, 302], icon: BsCloudDrizzleFill },
    { range: [310, 314], icon: BsCloudDrizzleFill },
    { range: [321], icon: BsCloudDrizzleFill },
    // Rain
    { range: [500, 504], icon: BsCloudRainFill },
    { range: [511], icon: BsCloudRainFill },
    { range: [520, 522], icon: BsCloudRainFill },
    { range: [531], icon: BsCloudRainFill },
    // Snow
    { range: [600, 602], icon: BsSnow2 },
    { range: [611, 613], icon: BsSnow2 },
    { range: [615, 616], icon: BsSnow2 },
    { range: [620, 622], icon: BsSnow2 },
    // Mist / Haze / Fog
    { range: [701], icon: BsFillCloudHaze2Fill },
    { range: [721], icon: BsFillCloudHaze2Fill },
    { range: [741], icon: BsFillCloudHaze2Fill },
    // Smoke
    { range: [711], icon: WiSmoke },
    // Dust / Sand / Ash
    { range: [731], icon: GiSandstorm },
    { range: [751], icon: GiSandstorm },
    { range: [761], icon: GiSandstorm },
    { range: [762], icon: GiSandstorm },
    // Squall
    { range: [771], icon: BsSnow2 },
    // Tornado
    { range: [781], icon: GiTornado },
    // Clear
    { range: [800], icon: WiNightClear },
    // Clouds
    { range: [801, 804], icon: BsClouds },
  ];

  if (!id) {
    return <BsClouds />;
  }

  const getIcon = (id: number) => {
    const icon = icons.find(
      ({ range }) => (id >= range[0] && id <= range[1]) || id === range[0]
    );
    return icon ? icon.icon : BsClouds;
  };

  const Icon = getIcon(id);

  return <Icon />;
};

export default WeatherIcon;
