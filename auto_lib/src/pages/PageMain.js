import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/PageMainStyle';

const images = [
    {
        url: 'https://cphoto.asiae.co.kr/listimglink/6/2011080809570839054_1.jpg',
        title: '도서 대출',
        width: '33.3%',
        path: 'loan',
    },
    {
        url: 'https://t1.daumcdn.net/cfile/tistory/2255413D56FCE34F21',
        title: '도서 반납',
        width: '33.3%',
        path: 'return',
    },
    {
        url: 'https://t1.daumcdn.net/cfile/tistory/995B0D395C3349BD05',
        title: '대출 기록 확인',
        width: '33.3%',
        path: 'login',
    },
];


export default function PageMain() {
    const classes = useStyles();

    return (
        <>
            <h2 style={{textAlign:'center'}}>Auto Library System</h2>
            <div className={classes.root}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        href={`${image.path}`}
                        style={{
                            width: image.width,
                        }}
                    >
              <span
                  className={classes.imageSrc}
                  style={{
                      backgroundImage: `url(${image.url})`,
                  }}
              />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                >
                  {image.title}
                    <span className={classes.imageMarked} />
                </Typography>
              </span>
                    </ButtonBase>
                ))}
            </div>
        </>
    );
}
