import styled from 'styled-components';

export interface BannerProps {
  brief?: string;
  title: string;
  src?: any;
  id?: number;
}
export const Banner: React.FC<BannerProps> = ({ src, brief, title }) => {
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
  height: 240px;
  background-color: ${(props) => props.theme.color.gray1};
  padding: 1.25rem, 1.5rem;

  .banner {
    &__contents {
      padding: 2rem 6rem;
    }

    &__brief {
      font-size: ${(props) => props.theme.font.medium};
      font-weight: 500;
      line-height: 2.5rem;
      color: ${(props) => props.theme.color.fontTextMuted};
    }

    &__title {
      font-size: ${(props) => props.theme.font.xlarge};
      font-weight: 900;
      line-height: 2.5rem;
      color: ${(props) => props.theme.color.baseBlackAlpha85};
    }

    &__button {
      display: flex;
      justify-content: flex-end;
      padding: 1rem;
    }
    &__button__text {
      padding: 1px 0.75rem;
      font-size: ${(props) => props.theme.font.xsmall};
      border-radius: 1.25rem;
      border: 1px solid rgba(38, 45, 49, 0.1);
      background: rgba(38, 45, 49, 0.2);
      color: ${(props) => props.theme.color.white};
    }

    &__image {
      width: 100%;
    }
  }
`;
