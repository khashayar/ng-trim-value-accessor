# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.0.0"></a>
# [3.0.0](https://github.com/khashayar/ng-trim-value-accessor/compare/v2.0.4...v3.0.0) (2019-08-27)



<a name="2.0.4"></a>
## [2.0.4](https://github.com/khashayar/ng-trim-value-accessor/compare/v2.0.3...v2.0.4) (2018-07-10)


### Bug Fixes

* must call `onTouched` on blur ([9d91696](https://github.com/khashayar/ng-trim-value-accessor/commit/9d91696)), closes [#13](https://github.com/khashayar/ng-trim-value-accessor/issues/13)



<a name="2.0.3"></a>
## [2.0.3](https://github.com/khashayar/ng-trim-value-accessor/compare/v2.0.2...v2.0.3) (2018-06-05)


### Bug Fixes

* remove extra quote from selector ([57bfb99](https://github.com/khashayar/ng-trim-value-accessor/commit/57bfb99)), closes [#18](https://github.com/khashayar/ng-trim-value-accessor/issues/18)



<a name="2.0.2"></a>
## [2.0.2](https://github.com/khashayar/ng-trim-value-accessor/compare/v2.0.0...v2.0.2) (2017-11-23)


### Bug Fixes

* **build:** compile before publish on npm ([3647281](https://github.com/khashayar/ng-trim-value-accessor/commit/3647281)), closes [#9](https://github.com/khashayar/ng-trim-value-accessor/issues/9)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/khashayar/ng-trim-value-accessor/compare/v2.0.0...v2.0.1) (2017-11-23)


### Bug Fixes

* **build:** compile before publish on npm ([3647281](https://github.com/khashayar/ng-trim-value-accessor/commit/3647281)), closes [#9](https://github.com/khashayar/ng-trim-value-accessor/issues/9)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/khashayar/ng-trim-value-accessor/compare/v1.0.1...v2.0.0) (2017-10-30)


### Features

* opt-out option ([69ff6db](https://github.com/khashayar/ng-trim-value-accessor/commit/69ff6db)), closes [#8](https://github.com/khashayar/ng-trim-value-accessor/issues/8)


### BREAKING CHANGES

* Ignore all element with `ng-trim-ignore` class.

It can be used as an opt-out option so the this library ignores
a field and doesn't trim the value of it.



<a name="1.0.1"></a>
## [1.0.1](https://github.com/khashayar/ng-trim-value-accessor/compare/v1.0.0...v1.0.1) (2017-09-25)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/khashayar/ng-trim-value-accessor/compare/v0.1.0...v1.0.0) (2017-09-25)


### Features

* provide an option to bail out of trimming ([6e05184](https://github.com/khashayar/ng-trim-value-accessor/commit/6e05184)), closes [#7](https://github.com/khashayar/ng-trim-value-accessor/issues/7)


### BREAKING CHANGES

* `readonly` input fields are now ignored.

This could be used as way to bail out of trimming as well, for
example in cases where another ValueAccessor is applied to a field.



<a name="0.1.0"></a>
# [0.1.0](https://github.com/khashayar/ng-trim-value-accessor/compare/v0.0.6...v0.1.0) (2017-07-25)


### Bug Fixes

* angular doesn't detect the selector ([ebe4312](https://github.com/khashayar/ng-trim-value-accessor/commit/ebe4312)), closes [#6](https://github.com/khashayar/ng-trim-value-accessor/issues/6)


### Features

* apply trim on input's blur event ([6fe2e67](https://github.com/khashayar/ng-trim-value-accessor/commit/6fe2e67)), closes [#4](https://github.com/khashayar/ng-trim-value-accessor/issues/4)



<a name="0.0.6"></a>
## [0.0.6](https://github.com/khashayar/ng-trim-value-accessor/compare/v0.0.5...v0.0.6) (2017-06-20)


### Bug Fixes

* ignore radio and password inputs ([7c2787e](https://github.com/khashayar/ng-trim-value-accessor/commit/7c2787e)), closes [#2](https://github.com/khashayar/ng-trim-value-accessor/issues/2)



<a name="0.0.5"></a>
## [0.0.5](https://github.com/khashayar/ng-trim-value-accessor/compare/v0.0.4...v0.0.5) (2017-05-09)


### Bug Fixes

* unused contructor, which breaks on angular 4.0 is removed ([9efd7fc](https://github.com/khashayar/ng-trim-value-accessor/commit/9efd7fc))



<a name="0.0.4"></a>
## [0.0.4](https://github.com/khashayar/ng-trim-value-accessor/compare/v0.0.3...v0.0.4) (2017-02-09)


### Bug Fixes

* **writer:** input view value doesn't get updated ([156f034](https://github.com/khashayar/ng-trim-value-accessor/commit/156f034)), closes [#1](https://github.com/khashayar/ng-trim-value-accessor/issues/1)



<a name="0.0.3"></a>
## 0.0.3 (2017-02-09)
