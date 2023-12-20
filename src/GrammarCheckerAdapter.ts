import GrammarCheckerLib from 'grammar-checker-lib';
import { LanguageToolApi } from './LanguageToolTypings';
import { MatchesEntity } from './LanguageToolTypings';


export class GrammarCheckerAdapter {
  private checker: GrammarCheckerLib;

  constructor() {
    this.checker = new GrammarCheckerLib();
  }

  async getDetectionResult(text: string): Promise<LanguageToolApi> {
    const issues = this.checker.checkGrammar(text);
    const matches = issues.map((issue: MatchesEntity) => ({
      message: issue.message,
      shortMessage: issue.shortMessage,
      offset: issue.offset,
      length: issue.length,
    }));
  
    return { 
      matches,
      software: {
        name: "Spellbound",
        version: "0.1",
        buildDate: "2023-12-20",
        apiVersion: 1,
        premium: false,
        premiumHint: "",
        status: "",
      },
      warnings: {
        incompleteResults: false,
      },
      language: {
        name: "English",
        code: "en-US",
        detectedLanguage: {
          name: "English",
          code: "en-US",
          confidence: 100,
        },
      },
    };
  }
}