import { css } from 'styled-components';

/**  디자인시스템 Size column의 key */
type SizeKey = 'top' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

/**  Height column key */
type LineHeightKey = '48' | '40' | '32' | '24' | '20';

/**  Weight column key */
type WeightKey = 'ExtraBold' | 'SemiBold' | 'Bold' | 'Medium' | 'Regular';

const sizeMap: Record<SizeKey, number> = {
  top: 40,
  h1: 32,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
};

const lineHeightMap: Record<LineHeightKey, number> = {
  48: 48,
  40: 40,
  32: 32,
  24: 24,
  20: 20,
};

const WeightKey: Record<WeightKey, number> = {
  ExtraBold: 800,
  Bold: 700,
  SemiBold: 600,
  Medium: 500,
  Regular: 400,
};

/** 컴포넌트별 사용할 수 있는 타입 정의 */
const componentTypeMap = {
  page: ['top', 'headWeb', 'headApp', 'title', 'subtitle', 'body'],
  input: ['title', 'labelLink', 'field'],
  button: ['button'],
  list: ['title', 'body', 'label', 'chip'],
};

type ComponentKey = keyof typeof componentTypeMap;
type TypeKey = (typeof componentTypeMap)[ComponentKey][number];
// type TypeKey = typeof componentTypeMap[ComponentKey]

type Scheme = Record<ComponentKey, { [K in TypeKey]?: [SizeKey, WeightKey, LineHeightKey] }>;

/** size, weight, height 순서입니다. */
const scheme: Scheme = {
  page: {
    top: ['top', 'ExtraBold', '48'],
    // head type이 두 개 있어서, Where 컬럼 값으로 구분합니다. (Web, App)
    headWeb: ['h1', 'ExtraBold', '40'],
    headApp: ['h2', 'ExtraBold', '24'],
    title: ['h2', 'SemiBold', '32'],
    subtitle: ['h3', 'Medium', '32'],
    body: ['h4', 'Medium', '32'],
  },
  input: {
    title: ['h3', 'Bold', '20'],
    labelLink: ['h5', 'Regular', '20'],
    field: ['h4', 'Regular', '24'],
  },
  button: {
    button: ['h4', 'SemiBold', '40'],
  },
  list: {
    title: ['h2', 'Bold', '32'],
    body: ['h3', 'Medium', '24'],
    label: ['h4', 'Regular', '24'],
    chip: ['h4', 'Medium', '32'],
  },
};

/** ComponentKey와 typeKey에 대응하는 css 반환
 *  ex. input, title -> `font-size: 18px; font-weight: 700; line-height: 20px;`
 */
const generateTypographyString = (componentKey: ComponentKey, typeKey: TypeKey) => {
  const [size, weight, lineHeight] = scheme[componentKey][typeKey];
  return css`
    font-size: ${sizeMap[size]}px;
    font-weight: ${WeightKey[weight]};
    line-height: ${lineHeightMap[lineHeight]}px;
  `;
};

/**
 * 피그마상 typo명과 일치시키기 위해 첫 글자 대문자로 변경
 * ex. page, head -> theme.typo.PageHead로 접근
 */
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

type TypeObjectKey = `${Capitalize<ComponentKey>}${Capitalize<TypeKey>}`;
type TypoObject = Record<TypeObjectKey, ReturnType<typeof generateTypographyString>>;

/** ComponentKey와 typeKey에 대응하는 css 반환
 *  ex. input -> { InputTitle: css, InputLabelLink: css, InputField: css }
 */
const getTypoObjectByTypeKey = (componentKey: ComponentKey, typeKeyArray: TypeKey[]) => {
  return typeKeyArray.reduce((typoObject: TypoObject, typeKey: TypeKey) => {
    const typeObjectKey = `${capitalizeFirstLetter(componentKey)}${capitalizeFirstLetter(typeKey)}`;
    return {
      ...typoObject,
      [typeObjectKey]: generateTypographyString(componentKey, typeKey),
    };
  }, {} as TypoObject);
};

const generateTypeObject = (scheme: Scheme) => {
  return (Object.keys(scheme) as ComponentKey[]).reduce(
    (typeObject, componentKey) => ({
      ...typeObject,
      ...getTypoObjectByTypeKey(componentKey, componentTypeMap[componentKey]),
    }),
    {},
  );
};

const typo = generateTypeObject(scheme);

export { typo };
