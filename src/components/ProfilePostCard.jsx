import PropTypes from "prop-types"
import {useState, useRef} from "react"
// @mui
import {
   Box,
   Link,
   Card,
   Stack,
   Paper,
   Avatar,
   Checkbox,
   Typography,
   CardHeader,
   IconButton,
   AvatarGroup,
   FormControlLabel
} from "@mui/material"
// components
import Iconify from "./Iconify"
import MyAvatar from "./MyAvatar"
import {fDate} from "../utils/formatTime"

const extractYouTubeId = url => {
   if (!url) return null
   const regExp =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/shorts|youtu\.be)\/([^&\s]{11})|(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]{11})/
   const match = url.match(regExp)
   return match ? match[1] || match[2] : null
}

// ----------------------------------------------------------------------

ProfilePostCard.propTypes = {
   post: PropTypes.object
}

export default function ProfilePostCard({post}) {
   const commentInputRef = useRef(null)

   const [isLiked, setLiked] = useState(post.isLiked)

   const hasComments = post.comments.length > 0

   const handleLike = () => {
      setLiked(true)
   }

   const handleUnlike = () => {
      setLiked(false)
   }

   const handleClickComment = () => {
      commentInputRef.current?.focus()
   }

   const youtubeId = extractYouTubeId(post.media)

   return (
      <Card>
         <CardHeader
            sx={{p: {xs: 1, sm: 3}, pt: {xs: 2, sm: 3}}}
            disableTypography
            avatar={<MyAvatar />}
            title={<Link variant="subtitle2" color="text.primary"></Link>}
            subheader={
               <Typography
                  variant="caption"
                  sx={{display: "block", color: "text.secondary"}}
               >
                  {fDate(post.createdAt)}
               </Typography>
            }
            action={
               <IconButton>
                  <Iconify
                     icon={"eva:more-vertical-fill"}
                     width={20}
                     height={20}
                  />
               </IconButton>
            }
         />

         <Stack
            spacing={3}
            sx={{
               p: {xs: 1, sm: 3}
            }}
         >
            <Typography>{post.message}</Typography>

            {youtubeId ? (
               <Box
                  sx={{
                     position: "relative",
                     paddingBottom: "56.25%",
                     height: "100%",
                     width: "100%",
                     aspectRatio: "1/1"
                  }}
               >
                  <iframe
                     src={`https://www.youtube.com/embed/${youtubeId}`}
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     title="YouTube video"
                     style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        aspectRatio: "1/1",
                        borderRadius: "8px"
                     }}
                  />
               </Box>
            ) : (
               post.media && (
                  <Box
                     component="video"
                     sx={{borderRadius: 1}}
                     src={post.media}
                     loop
                     controls
                  />
               )
            )}

            <Stack direction="row" alignItems="center">
               <FormControlLabel
                  control={
                     <Checkbox
                        size="small"
                        color="error"
                        checked={isLiked}
                        icon={<Iconify icon={"eva:heart-fill"} />}
                        checkedIcon={<Iconify icon={"eva:heart-fill"} />}
                        onChange={isLiked ? handleUnlike : handleLike}
                     />
                  }
                  sx={{minWidth: 72, mr: 0}}
               />
               <AvatarGroup
                  max={4}
                  sx={{"& .MuiAvatar-root": {width: 25, height: 25}}}
               >
                  {post.personLikes.map(person => (
                     <Avatar
                        key={person.name}
                        alt={person.name}
                        src={person.avatarUrl}
                     />
                  ))}
               </AvatarGroup>

               <Box sx={{flexGrow: 1}} />

               <IconButton onClick={handleClickComment}>
                  <Iconify
                     icon={"eva:message-square-fill"}
                     width={20}
                     height={20}
                  />
               </IconButton>

               <IconButton>
                  <Iconify icon={"eva:share-fill"} width={20} height={20} />
               </IconButton>
            </Stack>

            {hasComments && (
               <Stack spacing={1.5}>
                  {post.comments.map(comment => (
                     <Stack key={comment.id} direction="row" spacing={2}>
                        <Avatar
                           alt={comment.author.name}
                           src={comment.author.avatarUrl}
                        />

                        <Paper
                           sx={{
                              p: 1.5,
                              flexGrow: 1,
                              bgcolor: "background.neutral"
                           }}
                        >
                           <Stack
                              direction={{xs: "column", sm: "row"}}
                              alignItems={{sm: "center"}}
                              justifyContent="space-between"
                              sx={{mb: 0.5}}
                           >
                              <Typography variant="subtitle2">
                                 {comment.author.name}
                              </Typography>

                              <Typography
                                 variant="caption"
                                 sx={{color: "text.disabled"}}
                              >
                                 {fDate(comment.createdAt)}
                              </Typography>
                           </Stack>

                           <Typography
                              variant="body2"
                              sx={{color: "text.secondary"}}
                           >
                              {comment.message}
                           </Typography>
                        </Paper>
                     </Stack>
                  ))}
               </Stack>
            )}
         </Stack>
      </Card>
   )
}
