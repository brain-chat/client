import Button from "@/components/elements/button";
import Checkbox from "@/components/elements/checkbox";
import Input from "@/components/elements/input";
import SamplePageLayout from "@/layouts/samplePageLayout";
import styles from "@/styles/Signin.module.scss";
import { Box, FormControlLabel } from "@mui/material";
import Head from "next/head";

function Signin() {
    return (
        <>
            <Head>
                <title>Brain! - Signin</title>
            </Head>

            <SamplePageLayout>
                <form className={styles.form}>
                    <h2 className={styles.formHeader}>Signin</h2>

                    <Box>
                        <label className={styles.formLabel}>
                            Username
                        </label>

                        <Input fullWidth />
                    </Box>

                    <Box sx={{ my: 2 }}>
                        <label className={styles.formLabel}>
                            Password
                        </label>

                        <Input type="password" fullWidth />
                    </Box>

                    <Box sx={{ my: 2 }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                    </Box>

                    <Box sx={{ my: 2 }}>
                        <Button size="large" variant="contained" disableElevation fullWidth>Submit</Button>
                    </Box>
                </form>
            </SamplePageLayout>
        </>
    );
}

export default Signin;
