import React, { useState } from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Select from 'react-select';

function Jobs(props) {
  const useStyles = makeStyles((theme) => ({
    container: {
      width: 'calc(100vw - 20px)',
      flexGrow: 1,
    },
    CardContainer: {
      height: 'calc(100vh - 130px)',
      boxShadow: 'none',
    },
    title: {
      fontSize: 14,
      backgroundColor: 'aliceblue',
    },
    typo: {
      fontFamily: 'mosaik-font-black',
      padding: 15,
    },
    marginLeft: {
      marginLeft: '15%',
    },
    themeBackColor: {
      background: '#ffc500',
    },
    themeColor: {
      color: '#000',
    },
    pieCharts: {
      height: '100%',
      padding: 10,
    },
    mainHeight: {
      height: 'calc(100% - 40px)',
    },
    pharagraph: {
      marginTop: '60px',
      lineHeight: '2',
      padding: '0px 10px',
    },
  }));
  const classes = useStyles();
  const [selectedViewBy, setSelectedViewBy] = useState({
    value: 'python',
    label: 'Python',
  });
  const viewOptions = [
    { value: 'python', label: 'Python' },
    { value: 'react', label: 'React' },
    { value: 'android', label: 'Android' },
  ];

  function handleSelectedViewBy(event) {
    setSelectedViewBy(event);
  }
  return (
    <Grid item className={classes.container}>
      <Card className={classes.CardContainer}>
        <Grid item container lg={12} md={12} sm={12}>
          <Grid item lg={12} md={12} sm={12} className={classes.title}>
            <Typography className={classes.typo} variant="h5">
              Information
            </Typography>
          </Grid>
          <Grid
            item
            lg={12}
            className="full-width fullHeight dash-card-content "
          >
            <Grid item container lg={12} className={classes.pieCharts}>
              <Grid
                item
                lg={12}
                md={12}
                className={`background-white ${classes.mainHeight} overflow-auto `}
              >
                <Grid item container lg={12} className="m-t-20">
                  <Grid item lg={4} md={4}></Grid>
                  <Grid item lg={4} md={4}>
                    <Select
                      options={viewOptions}
                      value={selectedViewBy}
                      onChange={(e) => handleSelectedViewBy(e)}
                      placeholder="Select View By"
                    />
                  </Grid>
                </Grid>
                <Grid item container lg={12} className={classes.pharagraph}>
                  {selectedViewBy.value === 'python' && (
                    <div>
                      <Typography
                        className={`${classes.typo} p-l-0`}
                        variant="h5"
                      >
                        Python (programming language)
                      </Typography>
                      Python is an interpreted, high-level and general-purpose
                      programming language. Python's design philosophy
                      emphasizes code readability with its notable use of
                      significant indentation. Its language constructs and
                      object-oriented approach aim to help programmers write
                      clear, logical code for small and large-scale
                      projects.[29] Python is dynamically-typed and
                      garbage-collected. It supports multiple programm ing
                      paradigms, including structured, object-oriented and
                      functional programming. Python is often described as a
                      "batteries included" language due to its comprehensive
                      standard library.[30] Python was created in the late
                      1980s, and first released in 1991, by Guido van Rossum as
                      a successor to the ABC programming language. Python 2.0,
                      released in 2000, introduced new features, such as list
                      comprehensions, and a garbage collection system with
                      reference counting, and was discontinued with version 2.7
                      in 2020. Python 3.0, released in 2008, was a major
                      revision of the language that is not completely
                      backward-compatible and much Python 2 code does not run
                      unmodified on Python 3. With Python 2's end-of-life (and
                      pip having dropped support in 2021[32]), only Python
                      3.6.x[33] and later are supported, with older versions
                      still supporting e.g. Windows 7 (and old installers not
                      restricted to 64-bit Windows). Python interpreters are
                      supported for mainstream operating systems and available
                      for a few more (and in the past supported many more). A
                      global community of programmers develops and maintains
                      CPython, a free and open-source reference implementation.
                      A non-profit organization, the Python Software Foundation,
                      manages and directs resources for Python and CPython
                      development. As of January 2021, Python ranks third in
                      TIOBE’s index of most popular programming languages,
                      behind C and Java, having previously gained second place
                      and their award for the most popularity gain for 2020.
                    </div>
                  )}

                  {selectedViewBy.value === 'react' && (
                    <div>
                      <Typography
                        className={`${classes.typo} p-l-0`}
                        variant="h5"
                      >
                        React
                      </Typography>
                      React is an open-source, front end, JavaScript library for
                      building user interfaces or UI components. It is
                      maintained by Facebook and a community of individual
                      developers and companies. React can be used as a base in
                      the development of single-page or mobile applications.
                      However, React is only concerned with state management and
                      rendering that state to the DOM, so creating React
                      applications usually requires the use of additional
                      libraries for routing. React Router is an example of such
                      a library.
                      <Typography
                        className={`${classes.typo} p-l-0`}
                        variant="h5"
                      >
                        Virtual DOM
                      </Typography>
                      Another notable feature is the use of a virtual Document
                      Object Model, or virtual DOM. React creates an in-memory
                      data-structure cache, computes the resulting differences,
                      and then updates the browser's displayed DOM efficiently.
                      This process is called reconciliation. This allows the
                      programmer to write code as if the entire page is rendered
                      on each change, while the React libraries only render
                      subcomponents that actually change. This selective
                      rendering provides a major performance boost. It saves the
                      effort of recalculating the CSS style, layout for the page
                      and rendering for the entire page. Project status can be
                      tracked via the core team discussion forum. However, major
                      changes to React go through the Future of React repository
                      issues and pull requests.This enables the React community
                      to provide feedback on new potential features,
                      experimental APIs and JavaScript syntax improvements.
                    </div>
                  )}

                  {selectedViewBy.value === 'android' && (
                    <div>
                      <Typography
                        className={`${classes.typo} p-l-0`}
                        variant="h5"
                      >
                        Android (operating system)
                      </Typography>
                      Android is a mobile operating system based on a modified
                      version of the Linux kernel and other open source
                      software, designed primarily for touchscreen mobile
                      devices such as smartphones and tablets. Android is
                      developed by a consortium of developers known as the Open
                      Handset Alliance and commercially sponsored by Google. It
                      was unveiled in November 2007, with the first commercial
                      Android device launched in September 2008. It is free and
                      open source software; its source code is known as Android
                      Open Source Project (AOSP), which is primarily licensed
                      under the Apache License. However most Android devices
                      ship with additional proprietary software pre-installed,
                      most notably Google Mobile Services (GMS) which includes
                      core apps such as Google Chrome, the digital distribution
                      platform Google Play and associated Google Play Services
                      development platform. About 70 percent of Android
                      smartphones run Google's ecosystem; competing Android
                      ecosystems and forks include Fire OS (developed by Amazon)
                      or LineageOS. However the "Android" name and logo are
                      trademarks of Google which impose standards to restrict
                      "uncertified" devices outside their ecosystem to use
                      Android branding. The source code has been used to develop
                      variants of Android on a range of other electronics, such
                      as game consoles, digital cameras, portable media players,
                      PCs and others, each with a specialized user interface.
                      Some well known derivatives include Android TV for
                      televisions and Wear OS for wearables, both developed by
                      Google. Software packages on Android, which use the APK
                      format, are generally distributed through proprietary
                      application stores like Google Play Store, Samsung Galaxy
                      Store, and Huawei AppGallery, or open source platforms
                      like Aptoide or F-Droid.
                    </div>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
export default Jobs;
