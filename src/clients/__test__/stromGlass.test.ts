import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stromGlassWeather3HorusFixture from '@test/fixtures/stormglass_weaterh_3_hours.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stromGlass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    it('shold return the normalized forecast form the StormGlass service', async () => {
        const lat = -33.792726;
        const lng = 151.289824;

        mockedAxios.get.mockResolvedValue({data: stromGlassWeather3HorusFixture});

        const stormGlass = new StormGlass(mockedAxios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNormalized3HoursFixture);
    })
})