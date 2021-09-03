import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DropDown from '../../common/Select/DropDown';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import kathautsav from '../../../assets/images/katha-logo.png';
import Card from '@material-ui/core/Card';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import InputField from "../../common/TextField/InputField";
import PaymentButton from '../../common/Button/PayButton';
import FileUploader from "../../common/FileUploader";


const useStyles = makeStyles(theme => ({
    background: {
      backgroundColor: '#FEDB50',
      padding: 52,
      width: "100%",
      backgroundRepeat: "no-repeat",

    },
    StudentCountStepTwo: {
      padding: 30,
    },
    Detail: {
      color: '#66645E',
      fontWeight: "400",
      fontSize: "1rem",
      left: '40px',
      marginTop:'31px'
    },
    registrationCard: {
      width: '100%',
      height: "100%",
      borderRadius: "10",
      boxShadow: theme.shadows[2],
    },
    RegistrationForm: {
      color: '#66645E',
      fontWeight: "400",
      fontSize: "1rem"
    },

    Payment: {
      padding: '303px 0 17px 0',
      alignItems: "Center",
    },
    Reset: {
      lineHeight: '24px',
      fontWeight: 'bold',
      fontSize: '0.65rem',
      alignItems: "Center",
      marginBottom: '17px'
    },
    UploadFile: {
      width: '160px',
      padding: '13px 14px',
      backgroundColor: "#FDF6D8",
      "&:hover": {
        backgroundColor: "#FDF6D8"
      },
      borderRadius: '4px',
      textTransform: 'none'
    },
    formsize:{
      width: 120,
    },
    SerialNo: {
      padding: '2rem 1rem',
      font_style : 'normal',
      font_weight: 'normal',
      font_size: '13px',
      line_height: '18px',
      display: 'flex',
      align_items: 'center',
      /* Text Color/Blue Grey */
      color: '#525F7F'
    },
    Note: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '32px',
    textAlign: 'right',
    letterSpacing: '-0.02em',
    color: '#000000',
    paddingRight: '28px'
  }
  })
);
const StepTwo = (props) => {
  const options = Array(20).fill().map((x, i) => i + 1);
  const classes = useStyles();
  const [states, setStates] = React.useState({
    stepTwo: {
      0 : {
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        studentClass: '',
        storyCategory: '',
        storyPath: {}
      },
    },
    stepTwoErrorMessage: {
      0: {
        studentName: props.stepTwoMessage[0].studentName,
        studentEmail: props.stepTwoMessage[0].studentEmail,
        studentPhone: props.stepTwoMessage[0].studentPhone,
        studentClass: props.stepTwoMessage[0].studentClass,
        storyCategory: props.stepTwoMessage[0].storyCategory,
        storyPath: props.stepTwoMessage[0].studentName
      }
    },
    uploadFile: {
      0: {
        fileName: 'Upload File'
      }
    },
    dropDownValue : 1
  });

  const studentCount = (fieldName, e) => {
    let values = {}
    let errorMessages = {}
    let uploadFile = {}
    for (let step = 0; step < e.target.value; step++) {
      values.step = step
      errorMessages.step = step
      uploadFile.step = step

      values[step] = {
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        studentClass: '',
        storyCategory: '',
        storyPath: {}
      }

      errorMessages[step] = {
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        studentClass: '',
        storyCategory: '',
        storyPath: {}
      }

      uploadFile[step] = {
        fileName: 'Upload File'
      }
    }

    setStates((states) => {
      return {
        ...states,
        stepTwo: values,
        stepTwoErrorMessage: errorMessages,
        uploadFile: uploadFile,
        dropDownValue: e.target.value
      }
    })
  }

  const tableHeaders = [ "#", "NAME", "EMAIL ID", "PHONE NO", "CLASS", "STORY CATEGORY"];

  const onFileUpload = async (selectedFile, name, event, i) => {
    if (name) {
      setStates((states) => {
        states.uploadFile[i].fileName = 'Uploaded'
        states.stepTwo[i].storyPath = selectedFile
        return {
          ...states,
        }
      });
    }
  }

  const validate = () => {
    let isError = false
    for (let step = 0; step < states.dropDownValue; step++) {
      let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(states.stepTwo[step].studentEmail);
      let phoneNumberValid = /^\d+$/.test(states.stepTwo[step].studentPhone);

      if (_.isNull(states.stepTwo[step].studentEmail) || _.isEmpty(states.stepTwo[step].studentEmail) || !emailValid) {
        setStates((states) => {
          states.stepTwoErrorMessage[step].studentEmail = 'error'
          return {
            ...states,
          }
        })
        isError = true;
      }
      if (_.isNull(states.stepTwo[step].studentName) || _.isNull(states.stepTwo[step].studentName)) {
        setStates((states) => {
          states.stepTwoErrorMessage[step].studentName = 'error'
          return {
            ...states,
          }
        })
        isError = true;
      }
      if (_.isNull(states.stepTwo[step].studentPhone) || _.isEmpty(states.stepTwo[step].studentPhone) || !phoneNumberValid) {
        setStates((states) => {
          states.stepTwoErrorMessage[step].studentPhone = 'error'
          return {
            ...states,
          }
        })
        isError = true;
      }
      if (_.isEmpty(states.stepTwo[step].storyCategory) || !_.includes(["Fiction", "Non-Fiction", "Poetry"], states.stepTwo[step].storyCategory)) {
        setStates((states) => {
          states.stepTwoErrorMessage[step].storyCategory = 'error'
          return {
            ...states,
          }
        })
        isError = true;
      }

      if (_.isEmpty(states.stepTwo[step].studentClass) || !_.includes(["IV to VI", "VII to IX", "X to XII"], states.stepTwo[step].studentClass)) {
        setStates((states) => {
          states.stepTwoErrorMessage[step].studentClass = 'error'
          return {
            ...states,
          }
        })
        isError = true;
      }
      if (_.isEmpty(states.stepTwo[step].storyPath.name) || states.stepTwo[step].storyPath.size > 10000000) {
        setStates((states) => {
          states.uploadFile[step].fileName = 'Upload File'
          return {
            ...states,
          }
        })
        isError = false;
      }
    }

    if(true) {
      let stepTwoData = []
      for (let step = 0; step < states.dropDownValue; step++) {
        let data = states.stepTwo[step]
        stepTwoData.push(data)
      }
      props.validateDetailsStepTwo(stepTwoData)
    }
  }
  const onDropDown = (id, event, i) => {
    stepTwoFormValidation({ target: { id: `${id}`, value: `${event.target.value}`} }, i);
  }

  const stepTwoFormValidation = (event, i) => {
    switch (event.target.id) {
      case 'studentEmail':
        let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
        if (_.isNull(event.target.value) || _.isEmpty(event.target.value) || !emailValid) {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = 'error'
            return {
              ...states,
            }
          })
        }
        else {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = ''
            return {
              ...states,
            }
          })
        }
        break;
      case 'studentName':
        if (_.isEmpty(event.target.value) || _.isNull(event.target.value)) {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = 'error'
            return {
              ...states,
            }
          })
        }
        else {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = ''
            return {
              ...states,
            }
          })
        }
        break;
      case 'studentPhone':
        let phoneNumberValid = /^\d+$/.test(event.target.value);
        if (_.isNull(event.target.value) || _.isEmpty(event.target.value) || !phoneNumberValid) {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = 'error'
            return {
              ...states,
            }
          })
        }
        else {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = ''
            return {
              ...states,
            }
          })
        }
        break;
      case 'studentClass':
        if (_.isEmpty(event.target.value) || !_.includes(["IV to VI", "VII to IX", "X to XII"], event.target.value)) {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = 'error'
            return {
              ...states,
            }
          })
        }
        else {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = ''
            return {
              ...states,
            }
          })
        }
        break;
      case 'storyCategory':
        if (_.isEmpty(event.target.value) || !_.includes(["Fiction", "Non-Fiction", "Poetry"], event.target.value)) {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = 'error'
            return {
              ...states,
            }
          })
        }
        else {
          setStates((states) => {
            states.stepTwo[i][event.target.id] = event.target.value
            states.stepTwoErrorMessage[i][event.target.id] = ''
            return {
              ...states,
            }
          })
        }
        break;
      default:
        break;
    }
  }

  const onReset = () => {
    for (let step = 0; step < states.dropDownValue; step++) {
      setStates((states) => {
        states.stepTwo[step].studentName = ''
        states.stepTwo[step].studentEmail = ''
        states.stepTwo[step].studentPhone = ''
        states.stepTwo[step].studentClass = ''
        states.stepTwo[step].storyCategory = ''
        states.stepTwo[step].storyPath = {}
        states.stepTwoErrorMessage[step].studentName = ''
        states.stepTwoErrorMessage[step].studentEmail = ''
        states.stepTwoErrorMessage[step].studentPhone = ''
        states.stepTwoErrorMessage[step].studentClass = ''
        states.stepTwoErrorMessage[step].storyCategory = ''
        states.stepTwoErrorMessage[step].storyPath = ''
        states.uploadFile[step].fileName = 'Upload File'
        return {
          ...states,
        }
      })
    }
  }

  return (
    <Grid container direction="column" className={classes.background}>
      <Grid item container alignItems="center" direction="column">
        <Grid item>
          <img alt src={kathautsav} alt="title" width="168" height="90"/>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="subtitle2" className={classes.RegistrationForm}>Registration Form for
            Students</Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" direction="column">
        <Card className={classes.registrationCard}>

          <Grid item container alignItems="center" direction="column">
            <Grid item>
              <Typography gutterBottom variant="subtitle2" className={classes.Detail}>Student Details</Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" direction="column">
            <Grid item className={classes.StudentCountStepTwo}>
              <DropDown errorMessage='' isError={false} fieldName={"StudentCount"} options={options} toChange={true}
                        eventValidation={(fieldName, e) => studentCount(fieldName, e)} value={states.dropDownValue}/>
            </Grid>
          </Grid>
          <Grid item container align="right" direction="column">
            <Grid item>
              <Typography gutterBottom variant="subtitle2" className={classes.Note}>Note : Supported Document types:
                word, pdf, jpg, jpeg,png</Typography>
            </Grid>
          </Grid>

          <div id='bulk-details'>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {
                      tableHeaders.map((data) => {
                        return (<TableCell align="left">{data}</TableCell>);
                      })
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {states.dropDownValue !== '' && Array(states.dropDownValue).fill().map((x, i) => {
                    return <TableRow key={i}>
                      <div className={classes.SerialNo}>{i + 1}</div>
                      <TableCell align="right">
                        <InputField errorMessage='' isError={states.stepTwoErrorMessage[i].studentName.length > 0} fieldName={"studentName"} value={states.stepTwo[i].studentName} eventValidation={(event) => stepTwoFormValidation(event, i)}/>
                      </TableCell>
                      <TableCell align="right">
                        <InputField errorMessage='' isError={states.stepTwoErrorMessage[i].studentEmail.length > 0} fieldName={"studentEmail"} value={states.stepTwo[i].studentEmail} eventValidation={(event) => stepTwoFormValidation(event, i)}/>
                      </TableCell>
                      <TableCell align="right">
                        <InputField errorMessage='' isError={states.stepTwoErrorMessage[i].studentPhone.length > 0} fieldName={"studentPhone"} value={states.stepTwo[i].studentPhone} eventValidation={(event) => stepTwoFormValidation(event, i)}/>
                      </TableCell>
                      <TableCell align="right">
                        <DropDown errorMessage='' isError={states.stepTwoErrorMessage[i].studentClass.length > 0} fieldName={"studentClass"}
                                  options={["IV to VI", "VII to IX ", "X to XII"]}
                                  value={states.stepTwo[i].studentClass} eventValidation={(id, event) => onDropDown(id, event, i)}/>
                      </TableCell>
                      <TableCell align="right" >
                          <DropDown errorMessage='' isError={states.stepTwoErrorMessage[i].storyCategory.length > 0} fieldName={"storyCategory"}
                                    options={["Fiction", "Non-Fiction", "Poetry"]}
                                    value={states.stepTwo[i].storyCategory} eventValidation={(id, event) => onDropDown(id, event, i)}/>
                      </TableCell>
                      <TableCell align="right">
                        <FileUploader onFileUpload={(selectedFile, name, event) => onFileUpload(selectedFile, name, event, i)} style={classes.UploadFile} buttonName={states.uploadFile[i].fileName} />
                      </TableCell>
                    </TableRow>
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Grid item  align="center" className={classes.Payment}>
            <PaymentButton name={"Pay"} onButtonClick={validate}/>
          </Grid>
          <Grid item container align="center"direction="column">
            <Grid item component={Button} onClick={onReset}>
              <Typography gutterBottom variant="body2" className={classes.Reset}>Reset</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}
export default StepTwo;
