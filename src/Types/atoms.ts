/**
 * 기본 타입처럼 쓰이는 복합 타입들을 정의합니다.
 *
 * 기본 타입(primitive types)이란, number, boolean과 같이 더 작게 나눌 수 없는 타입을 말합니다.
 * 복합 타입이란, Array<T>, object와 같이 기본 타입을 조합하여 만든 타입을 말합니다.
 *
 * 단, 몇몇 타입은 타입 시스템에서 기본적으로 지원되지 않아 복합 타입으로 정의되지만, 기본 타입처럼 동작하는 타입들이 필요합니다.
 * (예: GeoLocation, RGBColor, DateRange, ComplexNumber, ...)
 * 또는 몇몇 기본 타입은 특정한 이름을 가지고 더욱 상세한 동작을 정의하기 위해 사용되기도 합니다. (newtype pattern)
 * (예: UUID, Email, PhoneNumber, NonEmptyString, ...)
 */

/** 특정한 시간 범위를 나타내는 타입입니다. */
export type DateRange = [Date, Date];
