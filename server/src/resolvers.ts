import Query from './resolvers/Query';
import Db, { DbTweet, DbUser } from './db';
import { Resolvers } from './resolvers-types.generated';
import tweetTwitterResolver from './resolvers/Tweet';
import userTwitterResolver from './resolvers/User';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbUserCache: Record<string, DbUser>;
  dbTweetToFavoriteCountMap: Record<string, number>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
  Tweet: tweetTwitterResolver,
  User: userTwitterResolver,
};
export default resolvers;
