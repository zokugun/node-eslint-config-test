/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * disallow unused expressions
   */
  'chai/no-unused-expressions'?: Linter.RuleEntry<ChaiNoUnusedExpressions>
}

/* ======= Declarations ======= */
// ----- chai/no-unused-expressions -----
type ChaiNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]
