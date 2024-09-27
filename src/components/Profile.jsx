import PropTypes from "prop-types"
// @mui
import {Grid, Stack} from "@mui/material"
import ProfileFollowInfo from "./ProfileFollowInfo"
import ProfileSocialInfo from "./ProfileSocialInfo"
import ProfileAbout from "../components/ProfileAbout"
import ProfilePostCard from "../components/ProfilePostCard"
// ----------------------------------------------------------------------

Profile.propTypes = {
   myProfile: PropTypes.object,
   posts: PropTypes.array
}

export default function Profile({myProfile, posts}) {
   return (
      <Grid container spacing={3}>
         <Grid item xs={12} md={4}>
            <Stack spacing={3}>
               <ProfileFollowInfo profile={myProfile} />
               <ProfileAbout profile={myProfile} />
               <ProfileSocialInfo profile={myProfile} />
            </Stack>
         </Grid>

         <Grid item xs={12} md={8}>
            <Stack spacing={1}>
               {posts.map(post => (
                  <ProfilePostCard key={post.id} post={post} />
               ))}
            </Stack>
         </Grid>
      </Grid>
   )
}
