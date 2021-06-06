import { SuggestionModel } from "@models/suggestion";
import {FollowModel} from '@models/follow';

export class PersonModel {
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
  photo?: Buffer;
  suggestions?: Array<SuggestionModel>;
  followers?: Array<FollowModel>;
}
