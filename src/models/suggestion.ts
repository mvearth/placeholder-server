import { SuggestionType } from '@type/suggestion.types';

export class SuggestionModel {
  description?: string;
  images?: Array<Buffer>;
  suggestionType?: SuggestionType;
  creat_at?:Date;
}