import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import { ALL_MOVIES_QUERY } from './graphql';

const allMovies = {
  request: {
    query: ALL_MOVIES_QUERY,
    variables: {
      sortField: 'popularity'
    }
  },
  result: {
    data: {
      allMovies: [
        {
          id: '775996',
          originalLanguage: 'en',
          originalTitle: 'Outside the Wire',
          overview:
            'In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.',
          popularity: 3494.778,
          posterPath:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2//e6SK2CAbO3ENy52UTzP3lv32peC.jpg',
          releaseDate: '2021-01-15',
          title: 'Outside the Wire',
          voteAverage: 6.6,
          voteCount: 441,
          budget: 0,
          runtime: 114,
          genres: ['Thriller', 'Action', 'Science Fiction'],
          cast: [
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//eZSIDrtTzhvabyjrmIITQLsjx8h.jpg',
              name: 'Anthony Mackie',
              character: 'Leo',
              order: 0
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//tM2rsBXd7fnNwjMNgGz4vqctlYF.jpg',
              name: 'Damson Idris',
              character: 'Lieutenant Thomas Harp',
              order: 1
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//eq3XlEq50DzhPAqiI1mVYrTDJZs.jpg',
              name: 'Pilou Asbæk',
              character: 'Victor Koval',
              order: 2
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//knR5avTlO4Xnxw7Nc3xxUj3rtjh.jpg',
              name: 'Emily Beecham',
              character: 'Sofiya',
              order: 3
            }
          ],
          director: {
            id: 29605,
            name: 'Mikael Håfström',
            profilePath:
              'https://image.tmdb.org/t/p/w300_and_h450_bestv2/undefined'
          }
        },
        {
          id: '560144',
          originalLanguage: 'en',
          originalTitle: 'Skylines',
          overview:
            "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",
          popularity: 2826.445,
          posterPath:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2//2W4ZvACURDyhiNnSIaFPHfNbny3.jpg',
          releaseDate: '2021-02-01',
          title: 'Skylines',
          voteAverage: 0,
          voteCount: 0,
          budget: 0,
          runtime: 110,
          genres: ['Science Fiction', 'Action'],
          cast: [
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//fl1Jt9brtTV6vfNl5mv55SrSCZm.jpg',
              name: 'Lindsey Morgan',
              character: 'Captain Rose Corley',
              order: 0
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//fcNw2EGkmlO0zlFh72KvubMbsjH.jpg',
              name: 'Rhona Mitra',
              character: 'Dr. Mal',
              order: 1
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//uFyivAeeG3h8Gt5a99ACRC44vZL.jpg',
              name: 'James Cosmo',
              character: 'Grant',
              order: 2
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//fpriiMtXCqG74iALsr9uK8iyDbp.jpg',
              name: 'Alexander Siddig',
              character: 'General Radford',
              order: 3
            }
          ],
          director: {
            id: 128636,
            name: "Liam O'Donnell",
            profilePath:
              'https://image.tmdb.org/t/p/w300_and_h450_bestv2/undefined'
          }
        },
        {
          id: '464052',
          originalLanguage: 'en',
          originalTitle: 'Wonder Woman 1984',
          overview:
            'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
          popularity: 2751.779,
          posterPath:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2//8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
          releaseDate: '2020-12-16',
          title: 'Wonder Woman 1984',
          voteAverage: 7.1,
          voteCount: 3094,
          budget: 200000000,
          runtime: 151,
          genres: ['Fantasy', 'Action', 'Adventure'],
          cast: [
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//fysvehTvU6bE3JgxaOTRfvQJzJ4.jpg',
              name: 'Gal Gadot',
              character: 'Diana Prince / Wonder Woman',
              order: 0
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//ipG3BMO8Ckv9xVeEY27lzq975Qm.jpg',
              name: 'Chris Pine',
              character: 'Steve Trevor',
              order: 1
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//oddvykQHx71hEZlvKinCzB3Vcfh.jpg',
              name: 'Kristen Wiig',
              character: 'Barbara Minerva / Cheetah',
              order: 2
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//kpaBw1oyfu2vGS2t9gGBz1Pz7vk.jpg',
              name: 'Pedro Pascal',
              character: 'Maxwell Lord',
              order: 3
            }
          ],
          director: {
            id: 6884,
            name: 'Patty Jenkins',
            profilePath:
              'https://image.tmdb.org/t/p/w300_and_h450_bestv2/undefined'
          }
        },
        {
          id: '508442',
          originalLanguage: 'en',
          originalTitle: 'Soul',
          overview:
            'Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.',
          popularity: 2018.933,
          posterPath:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2//hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',
          releaseDate: '2020-12-25',
          title: 'Soul',
          voteAverage: 8.3,
          voteCount: 4180,
          budget: 150000000,
          runtime: 102,
          genres: ['Animation', 'Comedy', 'Drama', 'Music', 'Fantasy'],
          cast: [
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//hPwCMEq6jLAidsXAX5BfoYgIfg2.jpg',
              name: 'Jamie Foxx',
              character: 'Joe Gardner (voice)',
              order: 1
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//yPTAi1iucXf85UpiFPtyiTSM6do.jpg',
              name: 'Tina Fey',
              character: '22 (voice)',
              order: 2
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//fAO3uL2UbtqLzjTQRvamyEfiLgA.jpg',
              name: 'Ahmir-Khalib Thompson',
              character: 'Curly (voice)',
              order: 3
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//orbTpG0jaYkPR167TNiEg0AKG3M.jpg',
              name: 'Phylicia Rashād',
              character: 'Libba Gardner (voice)',
              order: 4
            }
          ],
          director: {
            id: 12890,
            name: 'Pete Docter',
            profilePath:
              'https://image.tmdb.org/t/p/w300_and_h450_bestv2/undefined'
          }
        },
        {
          id: '539885',
          originalLanguage: 'en',
          originalTitle: 'Ava',
          overview:
            'A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.',
          popularity: 1312.876,
          posterPath:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
          releaseDate: '2020-07-02',
          title: 'Ava',
          voteAverage: 5.6,
          voteCount: 1140,
          budget: 0,
          runtime: 97,
          genres: ['Action', 'Crime', 'Drama', 'Thriller'],
          cast: [
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//ArD58MbiD6jpLTcc64ngbB9dKbv.jpg',
              name: 'Jessica Chastain',
              character: 'Ava',
              order: 0
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//5coH0AExljEnbseCXKL4CDOVQj8.jpg',
              name: 'John Malkovich',
              character: 'Duke',
              order: 1
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//lZ3dU4uFEV4BccAEvjJUBIY2OaB.jpg',
              name: 'Colin Farrell',
              character: 'Simon',
              order: 2
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//c45lu37VIcmBMcoBRaLdouqgHcC.jpg',
              name: 'Common',
              character: 'Michael',
              order: 3
            }
          ],
          director: {
            id: 55789,
            name: 'Tate Taylor',
            profilePath:
              'https://image.tmdb.org/t/p/w300_and_h450_bestv2/undefined'
          }
        }
      ]
    }
  }
};

const comedyMovies = {
  request: {
    query: ALL_MOVIES_QUERY,
    variables: {
      filters: { genre: ['Comedy'] },
      sortField: 'popularity'
    }
  },
  result: {
    data: {
      allMovies: [
        {
          id: '512200',
          originalLanguage: 'en',
          originalTitle: 'Jumanji: The Next Level',
          overview:
            'As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.',
          popularity: 632.282,
          posterPath:
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2//jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          releaseDate: '2019-12-04',
          title: 'Jumanji: The Next Level',
          voteAverage: 7,
          voteCount: 5356,
          budget: 125000000,
          runtime: 123,
          genres: ['Adventure', 'Comedy', 'Fantasy'],
          cast: [
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//kuqFzlYMc2IrsOyPznMd1FroeGq.jpg',
              name: 'Dwayne Johnson',
              character: 'Dr. Smolder Bravestone',
              order: 0
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//1mp95DQQrvfWttiJnvFnIF3VECR.jpg',
              name: 'Kevin Hart',
              character: "Franklin 'Mouse' Finbar",
              order: 1
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg',
              name: 'Jack Black',
              character: "Professor Sheldon 'Shelly' Oberon",
              order: 2
            },
            {
              profilePath:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2//52kqB0Bei1TaTBx2rABrijVhhTG.jpg',
              name: 'Karen Gillan',
              character: 'Ruby Roundhouse',
              order: 3
            }
          ],
          director: {
            id: 51851,
            name: 'Jake Kasdan',
            profilePath:
              'https://image.tmdb.org/t/p/w300_and_h450_bestv2/undefined'
          },
          __typename: 'Movie'
        }
      ]
    }
  }
};
const AllTheProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <MockedProvider mocks={[allMovies]} addTypename={false}>
        {children}
      </MockedProvider>
    </MemoryRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
