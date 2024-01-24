import styled from 'styled-components';

export interface BannerProps {
  brief?: string;
  title: string;
  src?: any;
  id?: number;
}
const Banner: React.FC<BannerProps> = ({ src, brief, title }) => {
  return (
    <BannerWrapper>
      <div className="banner__contents">
        <div className="banner__info">
          <div className="banner__brief">{brief ?? 'Brief'} </div>
          <div className="banner__title">{title ?? 'Banner Title'}</div>
        </div>
        <div className="banner__image">{src ?? <img src={src} />}</div>
      </div>
      <div className="banner__button">
        <span className="banner__button__text">1 / 3</span>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 320px;
  background-color: ${(props) => props.theme.color.gray5};
  padding: 20px 24px;
  .banner {
    &__contents {
      height: 256px;
      padding: 2rem 6rem;
    }

    &__brief {
      font-size: ${(props) => props.theme.font.medium};
      font-weight: 500;
      line-height: 2.5rem;
      color: ${(props) => props.theme.color.black2};
    }

    &__title {
      font-size: ${(props) => props.theme.font.xlarge};
      font-weight: 900;
      line-height: 2.5rem;
      color: ${(props) => props.theme.color.black4};
    }

    &__button {
      display: flex;
      justify-content: flex-end;
    }

    &__button__text {
      display: flex;
      padding: 4px 12px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      font-size: ${(props) => props.theme.font.small};
      color: ${(props) => props.theme.color.white};
    }

    &__image {
      width: 100%;
    }
  }
`;

export default Banner;
